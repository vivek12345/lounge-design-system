import React, { useState, useEffect, forwardRef } from "react";
import { Box } from "../Box";
import { Icon } from "../Icon";
import { Link } from "../Link";
import { Svg } from "../Svg";
import PropTypes from "prop-types";
import useNotificationStyles, { useCloseIconStyles } from "./styles";

const Notification = forwardRef(
  (
    {
      variant = "info",
      icon,
      dismissable = false,
      autoDismissAfter,
      children,
      onClose,
      ...rest
    },
    ref,
  ) => {
    const [visible, toggleVisibility] = useState(true);
    const styles = useNotificationStyles({ variant, visible });
    useEffect(() => {
      if (autoDismissAfter) {
        let timer = window.setTimeout(() => {
          toggleVisibility(false);
          onClose && onClose();
        }, autoDismissAfter);
        return () => {
          clearTimeout(timer);
          timer = null;
        };
      }
    }, []);
    const handleClick = e => {
      e.preventDefault();
      e.stopPropagation();
      toggleVisibility(false);
      onClose && onClose();
    };
    return (
      <Box ref={ref} {...styles} {...rest}>
        {children}
        {dismissable ? <CloseIcon onClick={handleClick} /> : null}
      </Box>
    );
  },
);

const NotificationTitle = ({ children, ...props }) => {
  return (
    <Box {...props} width="xs">
      {children}
    </Box>
  );
};

const NotificationContent = ({ children }) => {
  return (
    <Box display="flex" alignItems="center">
      {children}
    </Box>
  );
};

const NotificationIcon = ({ icon, mr = 5, ...props }) => {
  return <Icon name={icon} mr={mr} {...props} />;
};

const CloseIcon = ({ onClick }) => {
  return (
    <Link {...useCloseIconStyles()} onClick={onClick}>
      <Svg
        size={3}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1.25L13 13M13 1L1 13"
          stroke="#101010"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </Svg>
    </Link>
  );
};

Notification.Title = NotificationTitle;
Notification.Content = NotificationContent;
Notification.Icon = NotificationIcon;

Notification.propTypes = {
  /**
   * Specify the icon to show in the notification
   */
  icon: PropTypes.string,
  /**
   * Type of notification to show
   */
  variant: PropTypes.oneOf(["success", "info", "error", "warning", "default"]),
  /**
   * Boolean to decide if we should show the cross icon to dismiss the notification
   */
  dismissable: PropTypes.boolean,
  /**
   * Time in milliseconds to auto dismiss the notification after n milliseconds
   */
  autoDismissAfter: PropTypes.number,
  /**
   * callback fn to call after closing a notificiation on click of cross icon
   */
  onClose: PropTypes.func,
};

export default Notification;
