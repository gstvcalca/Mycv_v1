

export function JLCPayroll() {
  return (
    <div>
      <div className="w-full h-40 px-80 flex justify-start items-end gap-2">
        
        <h2 className="text-black text-4xl font-bold tracking-wide pb-2">
          Automating Payroll mailing
        </h2>
      </div>
      <div className="flex-1 bg-zinc-900 min-h-screen w-full text-zinc-300 items-center justify-center py-10 px-80 space-y-6 text-xl">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">\ \ The process</h2>
          <div className="h-px w-2/3 border-t-2 border-white rounded-full" />
        </div>
        <p className="text-justify indent-10">
          {" "}
          Our hired accountant sends us, at the end of each month, a single PDF
          with all the paychecks. That doc needs to be splitted by employee,
          double-checked to guarantee all the information is correct, update an
          excel spreadsheet - which will be used for making the payments later
          on, and then sent to the employee’s mail (one by one, of course).
        </p>

        <p className="text-justify indent-10">
          {" "}
          Here’s how it looks to do the first step of the process manuallly,
          fast forwarded and with no loading time:
        </p>
        <img
          src="/apt manual.gif"
          className="m-auto rounded-xl border-2 border-zinc-700 border-solid"
        ></img>
        <div className="h-px w-full border-t-2 border-zinc-800 my-4 border-solid m-auto rounded-full" />
        <div className="space-y-2 pt-10">
          <h2 className="text-3xl font-bold">\ \ The problem</h2>
          <div className="h-px w-2/3 border-t-2 border-white rounded-full" />
        </div>
        <p className="text-justify indent-10">
          {" "}
          It takes about a minute to check the information of each employee,
          about an hour to split the PDF and rename the files accordingly, and
          another hour to send the emails - this last step requires a
          double-checking, sending the wrong file is, of course, not allowed!
          Besides being a very monotonous task, with all the checking it ends up
          consuming half a day of work.
        </p>

        <div className="h-px w-full border-t-2 border-zinc-800 my-4 border-solid m-auto rounded-full" />
        <div className="space-y-2 pt-10">
          <h2 className="text-3xl font-bold">\ \ The solution</h2>
          <div className="h-px w-2/3 border-t-2 border-white rounded-full" />
        </div>
        <p className="text-justify indent-10">
          Automating it all, of course! a python script was made to read the
          payroll file, split the PDF, rename the files accordingly, update the
          spreadsheet and send the emails, all at once! The script retrieves the
          emails out of the same sheet it has to update in the process, so, no
          wrong files can be sent.
        </p>

        <p>Here’s how it looks in action:</p>
        <img src="/hol gif.gif" className="px-10 rounded-xl"></img>
        <div className="h-px w-full border-t-2 border-zinc-800 my-4 border-solid m-auto rounded-full" />
      </div>
    </div>
  );
}
