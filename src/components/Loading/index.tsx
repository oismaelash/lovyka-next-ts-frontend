import { Fragment } from "react";

export default function Loading() {
    return (
        <Fragment>
            <div className="fixed inset-0 flex items-center justify-center bg-blue-100">
                <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                    Loading...
                </div>
            </div>
        </Fragment>
    )
}