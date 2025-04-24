import { MainSection } from "./main_section";
import { WorkItem } from "./work_item";
import { WorkItemMultiple } from "./work_item_multiple";
import { WorkItemPlain } from "./work_item_plain";

export function WorkExperience() {
  return (
    <MainSection title="work experience">
      <div className="flex flex-col gap-5">
        <WorkItem
          title="IT Analyst at JLC maintenance services LTD"
          title_translation_reference="jlc_analyst_title"
          position_time="September 2021 - November 2023 (2 years 2 months)"
          position_time_translation_reference="jlc_analyst_year"
          img_url="./jlc.png">
          <p data-118n="jlc_analyst_description">
            Using mainly Python and PowerShell, I was in charge of automating HR
            and charging processes. That includes development of unit tests,
            scripts, BOTs, as well as updating the processes docs to BPMN
            standards and building PBI reports to track KPIs.
          </p>
        </WorkItem>
        <WorkItem
          title="IT Intern at Caterpillar Inc."
          title_translation_reference="cat_title"
          position_time="February 2020 - September 2021 (1 year 8 months)"
          position_time_translation_reference="cat_year"
          img_url="./cat.svg"
          link_url="https://www.linkedin.com/company/caterpillar-inc/posts/?feedView=all">
          <p data-118n="cat_description">
            Provided user support to create and publish PBI reports, development
            of automation solutions using O365 (Power Apps, Power Automate etc)
            and Automation Anywhere, documentation as-is and to-be included
            (BPMN).
          </p>
        </WorkItem>
        <WorkItem
          title="Administrative Technician at JLC maintenance services LTD"
          title_translation_reference="jlc_technician_title"
          position_time="February 2017 - January 2020 (3 years)"
          position_time_translation_reference="jlc_technician_years"
          img_url="./jlc.png">
          <p data-118n="jlc_technician_description">
            Responsible for purchasing materials on demand, elaboration of
            administrative procedures, control of hours performed and payroll,
            personal documents, work orders (daily work report), accounts
            payable and receivable, documents related to health and safety
            (PPRA, PCMSO, etc.) and hiring processes.
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
            link_url="https://www.linkedin.com/company/arcelormittal-brasil/posts/?feedView=all">
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
            link_url="https://www.linkedin.com/company/arcelormittal-brasil/posts/?feedView=all">
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
