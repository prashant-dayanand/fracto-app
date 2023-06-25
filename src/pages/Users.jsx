import React from "react";
import { useUserListQuery } from "../services/apis";
import { useEffect } from "react";

const Users = ({ reload }) => {
	const { data, refetch } = useUserListQuery({});

	useEffect(() => {
		refetch();
	}, [reload]);

	return (
		<section>
			<h2 className="mt-4 mb-4 text-4xl font-bold">All Users List</h2>
			<table class="styled-table">
				<thead>
					<tr>
						<th>SN</th>
						<th>Image</th>
						<th>Name</th>
						<th>wallet address</th>
						<th>ACTION</th>
					</tr>
				</thead>
				<tbody>
					{data?.data?.length > 0 &&
						data?.data?.map((item, index) => {
							return (
								<tr>
									<td>{index + 1}</td>
									<td>
										<div className="h-20 w-20 bg-gray-200"></div>
									</td>
									<td>{item?.name}</td>
									<td>{item?.wallet_address}</td>
									<td>View</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</section>
	);
};

export default Users;
