import React from "react";

type TypingProps = {
  user: string;
};

export default function Typing({ user }: TypingProps) {

    console.log(user);
    
   
  return (
    <div className=" flex items-center justify-end gap-x-1">
      <p className="  size-10 bg-slate-400 flex items-center justify-center rounded-full">{user?.slice(0 , 2).toUpperCase()}</p>
      
        <svg
          className="size-10 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <circle
            fill="#334155"
            stroke="#334155"
            stroke-width="15"
            r="15"
            cx="40"
            cy="100"
          >
            <animate
              attributeName="opacity"
              calcMode="spline"
              dur="0.5"
              values="1;0;1;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.4"
            ></animate>
          </circle>
          <circle
            fill="#334155"
            stroke="#334155"
            stroke-width="15"
            r="15"
            cx="100"
            cy="100"
          >
            <animate
              attributeName="opacity"
              calcMode="spline"
              dur="0.5"
              values="1;0;1;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.2"
            ></animate>
          </circle>
          <circle
            fill="#334155"
            stroke="#334155"
            stroke-width="15"
            r="15"
            cx="160"
            cy="100"
          >
            <animate
              attributeName="opacity"
              calcMode="spline"
              dur="0.5"
              values="1;0;1;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="0"
            ></animate>
          </circle>
        </svg>{" "}
      
    </div>
  );
}
