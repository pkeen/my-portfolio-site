import React from "react";
import { SpaTwoTone } from "@mui/icons-material";
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";

const Logo = () => {
	const theme = useTheme();

	return (
		<div css={{color: theme.typography.h1.color}}>
			SK
		</div>
	);
};

export default Logo;
