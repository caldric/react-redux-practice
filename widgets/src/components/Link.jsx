import React from 'react';

const Link = ({ className, href, children }) => {
  const onLinkClick = (event) => {
    // Restore opening links in new tab with Cmd/Ctrl + click
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    // Prevent page refresh
    event.preventDefault();

    // Change path without refreshing
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a className={className} href={href} onClick={onLinkClick}>
      {children}
    </a>
  );
};

export default Link;
