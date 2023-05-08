'use client';
import { Fragment } from 'react';

interface Props {
    text: string | undefined
}

export default function CommentComponent(props: Props) {
    return (
        <Fragment>
            <p className="mt-4 text-md text-gray-500 border-t border-gray-200">
                {props.text}
            </p>
        </Fragment>
    )
}
