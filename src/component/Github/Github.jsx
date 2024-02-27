import React from "react";
import GitHubCalendar from "react-github-calendar";
function Github() {
  return (
    <section id="github" className="mt-5">
      <h2 className="font-bold block text-center text-3xl">GitHub</h2>
      <div className="w-full mx-auto mt-5 dark:bg-slate-900 bg-violet-300 bg-opacity-35 shadow-md border dark:shadow-white p-6 rounded-md dark:backdrop-blur-md flex  justify-center">
        <GitHubCalendar
          username="ashishverma48"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          colorScheme="dark"
          // theme="dark"
          fontSize={16}
        />
      </div>
    </section>
  );
}

export default Github;
