'use client';
import { Fragment } from 'react';

interface Props {
    text: string | undefined
    color: string | undefined
    onAction?: () => Promise<void> | void | null
    isButton: boolean
}

export default function TagComponent(props: Props) {
    const style = `${props.isButton ? 'hover:cursor-pointer' : ''} mr-5 inline-flex items-center rounded-md ${props.color} px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10`
    return (
        <Fragment>
            <span
                onClick={props.onAction}
                className={style}>
                {props.text}
            </span>
        </Fragment>
    )
}
