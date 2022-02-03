import React, { Dispatch, SetStateAction } from "react";

interface IModalProps {
	show: boolean;
	closeCallBack: Dispatch<SetStateAction<boolean>>;
	children: JSX.Element;
}

function ModalDialog(props: IModalProps) {
	console.log(props);
	let close = () => props.closeCallBack((prev: any) => !prev);

	return (
		<div className={`fixed z-10 inset-0 overflow-y-auto ${props.show ? "" : "hidden"}`}>
			<div className="flex items-end justify-center min-h-screen p-20 text-center sm:block sm:p-0">
				<div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
				<div className="inline-block bg-white rounded-lg overflow-hidden shadow-xl transform mt-[10%] sm:max-w-lg sm:w-full">
					<button className="relative left-60 top-1" onClick={close}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
					{props.children}
				</div>
			</div>
		</div>
	);
}

export default ModalDialog;
