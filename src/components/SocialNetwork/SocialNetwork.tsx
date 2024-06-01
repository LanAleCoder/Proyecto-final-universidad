import React from "react";

interface SocialNetworkProps {
  children: React.ReactNode;
}

const SocialNetwork = ({ children }: SocialNetworkProps) => {
  return (
    <a href="#" className="button-social-network">
      {children}
    </a>
  );
};

export default SocialNetwork;
