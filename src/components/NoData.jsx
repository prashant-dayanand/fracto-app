import React from "react";
import NoImg from "../assets/image/nodata.png";

const NoData = () => {
	return (
		<div className="flex items-center justify-center w-full p-40">
			<div className="text-center">
				<img src={NoImg} className="w-60" alt="" />
				<p className="text-4xl mt-10">No Data Found!</p>
			</div>
		</div>
	);
};

export default NoData;
