import { Menu, type MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import {
	questionmark,
	lockImg,
	shield,
	mail,
	userImg,
} from "../../../utils/images/index";
import { NavLink } from "react-router-dom";

export const SettingsSideBar = () => {
	const menuItems: MenuProps["items"] = [
		{
			key: "1",
			label: <NavLink to="./privacy">Account privacy</NavLink>,
			icon: (
				<img
					src={shield}
					alt="Shield Icon"
					style={{ width: "24px", height: "24px" }}
				/>
			),
		},
		{
			key: "3",
			label: <NavLink to="./reset-password">Reset password</NavLink>,
			icon: (
				<img
					src={lockImg}
					alt="Lock Icon"
					style={{ width: "24px", height: "24px" }}
				/>
			),
		},
		{
			key: "4",
			label: <NavLink to="./change-email">Change email</NavLink>,
			icon: (
				<img
					src={mail}
					alt="Mail Icon"
					style={{ width: "22px", height: "24px" }}
				/>
			),
		},
		{
			key: "5",
			label: <NavLink to="./delete-profile">Delete profile</NavLink>,
			icon: (
				<img
					src={userImg}
					alt="Profile Icon"
					style={{ width: "24px", height: "24px" }}
				/>
			),
		},
		{
			key: "6",
			label: <NavLink to="./online-status">Online status</NavLink>,
			icon: (
				<img
					src={userImg}
					alt="Online Icon"
					style={{ width: "24px", height: "24px" }}
				/>
			),
		},
		{
			type: "divider",
			key: "divider-1",
		},
		{
			key: "7",
			label: <NavLink to="./help">Questions/help</NavLink>,
			icon: (
				<img
					src={questionmark}
					alt="Question Icon"
					style={{ width: "24px", height: "24px" }}
				/>
			),
		},
	];

	return (
		<Sider
			width={250}
			style={{
				background: "#fff",
				boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
			}}
			breakpoint="md"
			collapsedWidth="80"
		>
			<h2
				style={{
					textAlign: "center",
					background: "white",
					padding: "10px",
					margin: "0px",
					marginBottom: "-10px",
					borderRadius: "10px 10px 0px 0px",
				}}
			>
				Settings
			</h2>
			<Menu mode="inline" items={menuItems} defaultSelectedKeys={["1"]} />
		</Sider>
	);
};

export default SettingsSideBar;
