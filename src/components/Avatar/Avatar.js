import React, { forwardRef } from "react";
import { Box } from "../Box";
import { Icon } from "../Icon";
import { Image } from "../Image";
import useAvatarStyle from "./styles";

const Avatar = forwardRef(({ size = "md", username, src, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      {...useAvatarStyle({ size, username })}
      aria-label={username}
      {...props}
    >
      {src ? (
        <AvatarImage src={src} />
      ) : username ? (
        <AvatarUsername username={username} />
      ) : (
        <AvatarDefault />
      )}
    </Box>
  );
});

const AvatarUsername = ({ username }) => {
  return <span>{username.charAt(0)}</span>;
};

const AvatarDefault = () => {
  return (
    <Icon
      size="full"
      name="avatar"
      position="relative"
      bottom="-3px"
      verticalAlign="top"
    />
  );
};
const AvatarImage = ({ src }) => {
  return <Image size="full" src={src} />;
};

export default Avatar;
