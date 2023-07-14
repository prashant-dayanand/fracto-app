import React from "react";
import { useListCategoryQuery } from "../services/apis";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

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
						<th style={{ width: "20px", textAlign: "center" }}>SN</th>
						<th>Image</th>
						<th>Name</th>
						<th>Description</th>
						<th style={{ textAlign: "center" }}>ACTION</th>
					</tr>
				</thead>
				<tbody>
					{data?.data?.length > 0 &&
						data?.data?.map((item, index) => {
							return (
								<tr>
									<td style={{ textAlign: "center" }}>{index + 1}</td>
									<td style={{ textAlign: "center" }}>
										{item?.image ? (
											<img
												src={`http://localhost:4000/public/collectionImage/${item?.image}`}
												alt=""
												className="h-20 w-20 center"
											/>
										) : (
											<div className="h-20 w-20 bg-gray-200"></div>
										)}
									</td>
									<td>{item?.name}</td>
									<td>{item?.description}</td>
									<td style={{ textAlign: "center" }}>
										<Link to={`/edit-collection/${item?._id}`}>
											<i class="fa-solid fa-pen-to-square"></i>
										</Link>
										<Link to={`/collection/${item?._id}`}>
											<i class="fa-solid fa-eye ml-8"></i>
										</Link>
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
