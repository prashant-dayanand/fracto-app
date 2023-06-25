import React from "react";
import { useListCategoryQuery } from "../services/apis";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserList = ({ reload }) => {
	const navigate = useNavigate();
	const { data, refetch } = useListCategoryQuery({});

	useEffect(() => {
		refetch();
	}, []);

	return (
		<section>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<h2 className="mt-4 mb-4 text-4xl font-bold">All Collection List</h2>
				<button
					className="btn btn-primary"
					onClick={() => navigate("/add-category")}
				>
					Add Collection
				</button>
			</div>
			<table class="styled-table">
				<thead>
					<tr>
						<th>SN</th>
						<th>Image</th>
						<th>Name</th>
						<th>Description</th>
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
										{item?.image ? (
											<img
												src={`http://localhost:4000/public/collectionImage/${item?.image}`}
												alt=""
												className="h-20 w-20"
											/>
										) : (
											<div className="h-20 w-20 bg-gray-200"></div>
										)}
									</td>
									<td>{item?.name}</td>
									<td>{item?.description}</td>
									<td style={{ textAlign: "center" }}>
										<i class="fa-solid fa-pen-to-square"></i>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</section>
	);
};

export default UserList;
