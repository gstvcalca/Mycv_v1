import { Mail, MapPin, Link, ArrowRight } from "lucide-react";
import { useState } from "react";

export function MainPage() {
  // Step 1: Initialize a state variable to hold the input value.
  const [inputValue] = useState("");
  const [x, setX] = useState("");

  // Step 2: Create a change handler to update the state.
  const handleInputChange = (event: any) => {
    fetch("https://jsonplaceholder.typicode.com/todos/"+ event.target.value)
      .then((response) => response.json())
      .then((json) => setX(JSON.stringify(json)));
  };

  // Optionally, you can also create a function to handle form submission or a button click.
  const handleSubmit = () => {
    // Here you can use the inputValue
    console.log("Submitted value:", inputValue);
  };

  return (
    <div className="flex-1 min-h-screen border-2 py-12 px-48 space-y-6 items-center justify-center bg-zinc-900 text-zinc-200">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <button onClick={handleSubmit}>Submit</button>
      <div>{x}</div>
      <h1 className="font-bold text-5xl m-auto w-full border-solid">
        Hello there!!
      </h1>
      <div className="w-full h-px border-zinc-800 border-t-2 rounded-xl" />
      <div className="flex gap-4">
        <div className="flex-1 grow justify-center items-center text-center space-y-4 mb-5">
          <img
            src="./perfil.png"
            className="rounded-full size-96 border-2 border-solid border-zinc-500 m-auto"></img>
        </div>
        <div className="items-center p-2 align-middle m-auto flex-1 space-y-6 grow-[2]">
          <h2 className="text-4xl">In a nutshell::</h2>
          <p className="text-xl">
            3 years' worth of experience with RPA, good to advanced knowledge of
            O365 tools, Automation Anywhere (V11 and A360), Python and
            PowerShell.
          </p>
          <p className="text-2xl">
            I'm very easygoing. I love reading books, working out and running.
            Organized, patient and disciplined are among my main skills.
          </p>
        </div>
      </div>
      <div className="w-full mx-auto h-px border-zinc-800 border-t-2 rounded-xl" />
      <div className="flex gap-10 justify-between px-20 tracking-wide mb-10">
        <button className="flex gap-2 items-center font-semibold text-lg">
          <Mail className="size-5" /> gstv.calca@gmail.com
        </button>
        <div className="w-px border-2 border-solid border-zinc-700 rounded-full" />
        <button className="flex gap-2 items-center font-semibold text-lg">
          <MapPin className="size-5" /> Sydney, AU
        </button>
        <div className="w-px border-2 border-solid border-zinc-700 rounded-full" />
        <a
          className="flex gap-2 items-center font-semibold text-lg"
          href="https://www.linkedin.com/in/gcalca">
          <Link className="size-5" /> LinkedIn/gcalca
        </a>
      </div>
      <div className="w-full mx-auto h-px border-zinc-800 border-t-2 rounded-xl" />
      <div className="flex justify-between  py-5 ">
        <div className="space-y-2">
          <h2 className="text-2xl underline underline-offset-8 tracking-wider">
            Technologies I work with:
          </h2>
          <ul className="list-disc px-6 gap-2 text-lg">
            <li>Python</li>
            <li>PowerShell</li>
            <li>Power Automate (web & desktop)</li>
            <li>O365 (macros and VBA scripts)</li>
            <li>Automation Anywhere (V11 and A360)</li>
            <li>Power BI</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl underline underline-offset-8 tracking-wider">
            Certifications:
          </h2>
          <ul className="list-disc px-6 gap-2 text-lg">
            <li>6 Sigma Green Belt (Caterpillar)</li>
            <li>Microsoft PL-900 (Power Platform)</li>
            <li>Microsoft DA-100 (Power BI)</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl underline underline-offset-8 tracking-wider">
            Education:
          </h2>
          <div className="border-l-2 border-zinc-300 px-3">
            <p className="font-bold">Bachelor in Computer Engineering</p>
            <p>2017 - 2021</p>
            <p>Engineering University of Piracicaba (Brazil)</p>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl underline underline-offset-8 tracking-wider mb-4">
          Relevant work experience:
        </h2>
        <div className="border-l-2 border-zinc-300 px-3 space-y-1 bg-gradient-to-r from-zinc-800 rounded-r-xl p-2">
          <p className="font-bold">
            IT Analyst at JLC maintenance services LTD
          </p>
          <p>September 2021 - November 2023 (2 years 2 months)</p>
          <div className="h-px w-full border-zinc-500 border-t-2 rounded-full" />
          <p>
            Using mainly Python and PowerShell, I was in charge of automating HR
            and charging processes. That includes development of unit tests,
            scripts, BOTs, as well as updating the processes docs to BPMN
            standards and building PBI reports to track KPIs.
          </p>
        </div>
        <div className="border-l-2 border-zinc-300 px-3 space-y-1 bg-gradient-to-r from-zinc-800 rounded-r-xl p-2">
          <p className="font-bold">IT Intern at Caterpillar Inc.</p>
          <p>February 2020 - September 2021 (1 year 8 months)</p>
          <div className="h-px w-full border-zinc-500 border-t-2 rounded-full" />
          <p>
            Provided user support to create and publish PBI reports, development
            of automation solutions using O365 (Power Apps, Power Automate etc)
            and Automation Anywhere, documentation as-is and to-be included
            (BPMN).
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl underline underline-offset-8 tracking-wider mb-4">
          Some of my work:
        </h2>
        <a
          className="flex items-center gap-2 underline underline-offset-4 cursor-pointer rounded-xl border-l-2 border-zinc-300 px-3 space-y-1 bg-gradient-to-r from-zinc-800 rounded-r-xl p-2"
          href="/prdo">
          <ArrowRight />
          <p className="font-bold">
            Automating a billing process: ArcelorMittal PortalRDO
          </p>
        </a>
        <a
          className="flex items-center gap-2 underline underline-offset-4 cursor-pointer rounded-xl border-l-2 border-zinc-300 px-3 space-y-1 bg-gradient-to-r from-zinc-800 rounded-r-xl p-2"
          href="/jlcpayroll">
          <ArrowRight />
          <p className="font-bold">Automating payroll mailing</p>
        </a>
      </div>
    </div>
  );
}
