import { MainSection } from "./main_section";
import { AutomationAnywhereTag } from "./tags/automation_anywhere_tag";
import { CSSTag } from "./tags/css_tag";
import { ExcelTag } from "./tags/excel_tag";
import { HTMLTag } from "./tags/html_tag";
import { JavaScriptTag } from "./tags/javascript_tag";
import { O365Tag } from "./tags/o365_tag";
import { PowerAppsTag } from "./tags/power_apps_tag";
import { PowerAutomateTag } from "./tags/power_automate_tag";
import { PowerBITag } from "./tags/powerbi_tag";
import { PowerShellTag } from "./tags/powershell_tag";
import { PythonTag } from "./tags/python_tag";
import { SapTAG } from "./tags/sap_tag";
import { SharepointTag } from "./tags/sharepoint_tag";
import { VBATag } from "./tags/vba_tag";
import { WorkItem } from "./work_item";
import { WorkItemMultiple } from "./work_item_multiple";
import { WorkItemPlain } from "./work_item_plain";

export function WorkExperience() {
  return (
    <MainSection title="work experience">
      <div className="flex flex-col gap-5">
        <WorkItem
          title="Part-time Web Developer at Sponge Agency"
          title_translation_reference="sponge_title"
          position_time="February 2025 - Current"
          position_time_translation_reference="sponge_years"
          img_url="./sponge.png"
          link_url="https://www.spongeagency.com.au/"
          tags={[<JavaScriptTag/>, <CSSTag/>, <HTMLTag/>]}>
          <p data-118n="sponge_description">
            Project based role working with Sponge Agency’s Brazil based client
            portfolio, providing web development, automation programing, digital
            and data support.
          </p>
        </WorkItem>
        <WorkItem
          title="IT Analyst at JLC maintenance services LTD"
          title_translation_reference="jlc_analyst_title"
          position_time="September 2021 - November 2023 (2 years 2 months)"
          position_time_translation_reference="jlc_analyst_year"
          img_url="./jlc.png"
          tags={[<PythonTag/>, <PowerShellTag/>, <PowerBITag/>, <VBATag/>]}>
          <ul className="list-disc list-inside">
            <li data-118n="jlc_analyst_d1">
              Automated a monthly billing workflow for 20+ employees by
              developing a Python BOT, PowerShell scripts, and a Power BI
              report, cutting manual processing time by 75% and eliminating
              data-entry errors;
            </li>
            <li data-118n="jlc_analyst_d2">
              Automated the monthly payroll mailing for the company (40
              employees);
            </li>
            <li data-118n="jlc_analyst_d3">
              Automated the verification and renewal of WHS documents of the
              company (40 employees) by creating VBA Scripts and a PBI report.
            </li>
          </ul>
        </WorkItem>
        <WorkItem
          title="IT Intern at Caterpillar Inc."
          title_translation_reference="cat_title"
          position_time="February 2020 - September 2021 (1 year 8 months)"
          position_time_translation_reference="cat_year"
          img_url="./cat.svg"
          link_url="https://www.linkedin.com/company/caterpillar-inc/posts/?feedView=all"
          tags={[<AutomationAnywhereTag/>, <PowerAutomateTag/>, <PowerAppsTag/>, <PowerBITag/>, <O365Tag/>, <SharepointTag/> ]}>
          <ul className="list-disc list-inside">
            <li data-118n="cat_d1">
              Collaborated with cross-functional teams to develop two Automation
              Anywhere BOTs
            </li>
            <li data-118n="cat_d2">
              Handled code review tasks for development and maintenance of
              Automation Anywhere BOTs
            </li>
            <li data-118n="cat_d3">
              Developed a Power App to handle internal requests to the IT team
            </li>
            <li data-118n="cat_d4">
              Provided user support to create and publish PBI reports as well as
              to collaborate using O365 tools
            </li>
          </ul>
        </WorkItem>
        <WorkItem
          title="Administrative Technician at JLC maintenance services LTD"
          title_translation_reference="jlc_technician_title"
          position_time="February 2017 - January 2020 (3 years)"
          position_time_translation_reference="jlc_technician_years"
          img_url="./jlc.png"
          tags={[<O365Tag/>, <VBATag/>]}>
          <p data-118n="jlc_technician_description">
            Responsible for purchasing materials on demand, elaboration of
            administrative procedures, control of hours performed and payroll,
            personal documents, work orders (daily work report), accounts
            payable and receivable, documents related to WHS (PPRA, PCMSO, etc.)
            and hiring processes.
          </p>
        </WorkItem>
        <WorkItemMultiple
          img_url="./arcelormittal.svg"
          link_url="https://www.linkedin.com/company/arcelormittal-brasil/posts/?feedView=all"
          company="ArcelorMittal">
          <WorkItemPlain
            title="Administrative assistant"
            title_translation_reference="ampi_assistant_title"
            position_time="August 2014 - May 2016 (1 year 10 months)"
            position_time_translation_reference="ampi_assistant_years"
            img_url="./arcelormittal.svg"
            link_url="https://www.linkedin.com/company/arcelormittal-brasil/posts/?feedView=all"
            tags={[<SapTAG/>, <ExcelTag/>]}>
            <p data-118n="ampi_assistant_description">
              Mainly using SAP and MS-Excel, I was responsible for building and
              presenting a weekly result reports (KPIs), administrative
              processes related to the registration, purchase and repair of
              maintenance materials, tracking of maintenance costs, maintenance
              plan and work orders.
            </p>
          </WorkItemPlain>
          <div className="h-px w-full border-border-color border-[1px] my-5 box-border" />
          <WorkItemPlain
            title="Intern"
            title_translation_reference="ampi_intern_title"
            position_time="April 2014 - August 2014 (1 year 5 months)"
            position_time_translation_reference="ampi_intern_years"
            img_url="./arcelormittal.svg"
            link_url="https://www.linkedin.com/company/arcelormittal-brasil/posts/?feedView=all"
            tags={[<SapTAG/>, <ExcelTag/>]}>
            <p data-118n="ampi_intern_description">
              Daily to yearly tracking of hydraulics systems' levels &
              administrative procedures related to purchasing and repairing of
              maintenance materials using SAP.
            </p>
          </WorkItemPlain>
        </WorkItemMultiple>
      </div>
    </MainSection>
  );
}
