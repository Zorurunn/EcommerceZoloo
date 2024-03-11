import { Children, PropsWithChildren } from "react";

export const Container = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <div className="w-screen max-w-[1240px] m-auto bg-[blue] h-[10px]">
      {children}
    </div>
  );
};
