import React from "react";
import About from "../Components/about/About";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("HAKKIMIZDA")} />
      <About />
    </>
  );
}

export default AboutPage;
