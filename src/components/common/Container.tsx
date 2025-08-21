import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <section className="max-w-[1440px] w-full mx-auto px-5 py-16 lg:py-24 xl:py-32">
      {children}
    </section>
  );
};

export default Container;
