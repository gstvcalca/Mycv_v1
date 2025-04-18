import { ArrowBigDown } from "lucide-react";

export function PRDOPage() {
  return (
    <div>
      <div className="w-full h-40 px-80 flex justify-start items-end gap-2">
        <img
          src="/E9EF8CFF-92D6-4451-AFA2-5B4810707A5C_4_5005_c.jpeg"
          className="h-36"
        ></img>
        <h2 className="text-black text-4xl font-bold tracking-wide pb-2">
          Automating a billing process: ArcelorMittal Portal RDO
        </h2>
      </div>
      <div className="flex-1 bg-zinc-900 min-h-screen w-full text-zinc-300 items-center justify-center py-10 px-80 space-y-6 text-xl">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">\ \ The process</h2>
          <div className="h-px w-2/3 border-t-2 border-white rounded-full" />
        </div>
        <p className="text-justify indent-10">
          {" "}
          The billing process for hourly rated services (HRS) of our main
          customer, ArcelorMittal Piracicaba, has to be done through a website
          called ‘Portal RDO’, or PRDO for short. An overview of the process
          looks like this:
        </p>

        <div className="flex-1 items-center justify-center w-full  text-center">
          <div className="h-px w-2/3 border-t-2 border-zinc-800 my-4 border-solid m-auto rounded-full" />
          <p className="">Submit entry</p>
          <ArrowBigDown className="w-full" />
          <p>Request approval</p>
          <ArrowBigDown className="w-full" />
          <p>Group by week and activity</p>
          <ArrowBigDown className="w-full" />
          <p>Request approval</p>
          <ArrowBigDown className="w-full" />
          <p>Issue invoice</p>
          <div className="h-px w-2/3 border-t-2 border-zinc-800 my-4 border-solid m-auto rounded-full" />
        </div>
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
          An entry is needed for each employee, for each day and for each
          activity. Given that the company has about 20 employees providing such
          kind of services, at least 20 inputs per day is required. The actual
          number of entries is close to 40 though, as there are some of them who
          work on up to seven activities in a single day. Under normal
          conditions, it takes about 5 minutes to input a single entry.
          Depending on the customer’s portal network availability, that time can
          easily double – the PRDO is used country-wide for all of this
          customer’s vendors and it often gets flooded with requests,
          significantly increasing its response time.
        </p>
        <p className="text-justify indent-10">
          That means, when everything goes smoothly, the person in charge of
          submitting the entries spends about three hours a day doing just that.
          When PRDO ‘is not in a good mood’, that goes up to six hours and,
          sometimes, the whole day of work.
        </p>
        <div className="space-y-2 pt-10">
          <h2 className="text-3xl font-bold">\ \ The solution</h2>
          <div className="h-px w-2/3 border-t-2 border-white rounded-full" />
        </div>
        <p className="text-justify indent-10">
          The best-case scenario would be making the entries through web
          requests, but since no APIs is provided, there was no means of a
          script-base authentication like OAuth. A Python RPA bot was developed
          to login in and retrieve the authentication cookies, and from that
          point on, many web requests are made to retrieve the necessary
          information – active contract, current prices being charged for each
          role, workers currently active etc. and send the POST request to
          actually submit the entry or accomplish any other of the required
          steps.
        </p>

        <p className="text-justify indent-10">
          This solution proved to be very reliable and is able to process more
          than 80% of all the entries. Running on non-assisted mode, the
          exceptions are skipped and can be checked out later. When on assisted
          mode, a prompt is given to the user to set the correct action to be
          taken by the bot. The average time to process each entry is 20
          seconds, and the bot is less affected when the
          portal is overloaded, not taking more than 40 seconds for each entry
          in this condition.
        </p>
        <p>Here’s how it looks in action:</p>
        <img src="/apt rpa.gif" className="m-auto"></img>
        <p className="text-justify indent-10 ">
          {" "}
          Furthermore, a PBI report was built to keep track of everything in a
          nice and effortless way. The customer doesn’t provide a gateway or
          anything like that, so no connection can be established between the
          report and the data, a script to fetch it was made.
        </p>
        <p className="text-justify indent-10">
          To wrap it all up, I took me about 2 months to finish this solution,
          and it takes five months for it to pay for itself – that is, taking
          only the best availability of PRDO to do the math. In the first year,
          it means a ROI of more than 70%. Without taking tests and config files
          into account, 31 scripts were used in this project, 23 of them being
          ‘.psm1’, 7 ‘.ps1’ and one python.
        </p>
      </div>
    </div>
  );
}
