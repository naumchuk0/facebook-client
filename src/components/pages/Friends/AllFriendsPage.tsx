import { Flex, Row, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import type { IFriendRecommendation } from "./types";
import { useAppSelector } from "../../../hooks/redux";
import { APP_ENV } from "../../../env";
import { apiClient } from "../../../utils/api/apiClient";
import { avatar } from "../../../utils/images";
import FriendListItemCard from "./components/FriendListItemCard";

const { Title } = Typography;

const AllFriendsPage = () => {
	const { user } = useAppSelector((state) => state.account);
	const [friends, setFriends] = useState<IFriendRecommendation[]>([]);

	useEffect(() => {
		apiClient
			.get(`/api/friends/get-all-friends?userId=${user?.id}`)
			.then((res) => {
				const updatedFriends = res.data.map(
					(friend: IFriendRecommendation) => ({
						...friend,
						avatar:
							friend.avatar === null
								? avatar
								: `${APP_ENV.BASE_URL}/images/avatars/${friend.avatar}`,
					}),
				);
				setFriends(updatedFriends);
			});
	}, [user?.id]);

	return (
		<>
			{friends.length === 0 && (
				<Flex
					vertical
					justify="center"
					align="center"
					style={{ height: "100%" }}
				>
					<UserOutlined style={{ fontSize: "64px" }} />
					<Title level={3}>Your friends will be shown here</Title>
				</Flex>
			)}
			{friends.length > 0 && (
				<Row gutter={[16, 16]} wrap={true}>
					{friends.map((friend) => (
						<FriendListItemCard key={friend.id} friend={friend} />
					))}
				</Row>
			)}
		</>
	);
};

export default AllFriendsPage;
