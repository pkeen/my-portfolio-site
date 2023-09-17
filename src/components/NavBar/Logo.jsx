import React from "react";
import { SpaTwoTone } from "@mui/icons-material";
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";

const Logo = () => {
	const theme = useTheme();

	return (
		<div css={{color: theme.colors.grey[300]}}>
			PK
		</div>
	);
};

export default Logo;
