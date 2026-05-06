<?php
// PHPMailer kütüphanesini dahil et
require_once '../PHPMailer/src/Exception.php';
require_once '../PHPMailer/src/PHPMailer.php';
require_once '../PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

error_reporting(E_ALL);
ini_set('display_errors', 1);

echo '<h2>SMTP E-posta Test Sistemi</h2>';
echo '<hr>';

try {
    echo '<p>🔄 PHPMailer başlatılıyor...</p>';
    $mail = new PHPMailer(true);
    
    // SMTP ayarları - güncel mail istemci bilgileri
    echo '<p>SMTP ayarları yapılandırılıyor (shanks.trdns.com)...</p>';
    $mail->isSMTP();
    $mail->Host       = 'shanks.trdns.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@webcenter.com.tr';
    $mail->Password   = 'Wc12345678.,.';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;
    
    // SSL doğrulamasını esnek yap
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );
    
    // Debug modunu aç
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = 'html';
    
    echo '<p>📝 E-posta içeriği hazırlanıyor...</p>';
    
    // E-posta ayarları
    $mail->setFrom('info@webcenter.com.tr', 'Webcenter SMTP Test');
    $mail->addAddress('info@webcenter.com.tr', 'Test Alıcısı');
    
    // İçerik
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = 'SMTP Test Basarili - ' . date('Y-m-d H:i:s');
    $mail->Body    = '
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #28a745; text-align: center;">SMTP Test Basarili</h2>
        <p><strong>Sunucu:</strong> shanks.trdns.com:465</p>
        <p><strong>Guvenlik:</strong> SSL/TLS</p>
        <p><strong>Test Zamanı:</strong> ' . date('Y-m-d H:i:s') . '</p>
        <hr>
        <p style="color: #28a745; font-weight: bold;">Contact form SMTP ayarlari guncel.</p>
        <p style="color: #666;">Ayni sifre ile gonderim testi yapildi.</p>
    </div>';
    
    echo '<p>📤 E-posta gönderiliyor...</p>';
    echo '<div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 10px 0;">';
    
    $mail->send();
    
    echo '</div>';
    echo '<div style="color: #28a745; font-weight: bold; margin: 20px 0; padding: 15px; border: 2px solid #28a745; border-radius: 5px; background: #d4edda;">';
    echo '<strong>BASARILI!</strong> E-posta basariyla gonderildi!';
    echo '<br>📧 <strong>info@webcenter.com.tr</strong> adresini kontrol edin.';
    echo '<br><strong>Contact form SMTP ayarlari guncel.</strong>';
    echo '</div>';
    
} catch (Exception $e) {
    echo '</div>';
    echo '<div style="color: #dc3545; font-weight: bold; margin: 20px 0; padding: 15px; border: 2px solid #dc3545; border-radius: 5px; background: #f8d7da;">';
    echo '<strong>HATA!</strong> E-posta gonderilemedi.';
    echo '<br><strong>Hata Mesaji:</strong> ' . $mail->ErrorInfo;
    echo '</div>';
}

echo '<hr>';
echo '<p style="color: #666; font-size: 12px;">Test tamamlandı - ' . date('Y-m-d H:i:s') . '</p>';
?>
