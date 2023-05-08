'use client';
import { Fragment } from 'react';


interface Props {
    id: string | undefined
    datetime: string | undefined
    title: string | undefined
    description: string | undefined
    author: string | undefined
    like: number | undefined
    dislike: number | undefined
}

export default function ServiceCardComponent(props: Props) {

    return (
        <Fragment>
            <article key={props.id} className="flex max-w-xl flex-col items-start justify-between hover:cursor-pointer"
                onClick={() => location.href = `service?id=${props.id}`}
            >
                <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={props.datetime} className="text-gray-500">
                        {props.datetime}
                    </time>
                </div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a>
                            <span className="absolute inset-0" />
                            {props.title}
                        </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{props.description}</p>
                </div>
                <div className="relative mt-4 flex flex-col gap-x-4">
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            Like:
                            <a>
                                <span className="absolute inset-0" />
                                {props.like}
                            </a>
                        </p>
                    </div>
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900 flex max-w-xl flex-row items-start">
                            Dislike:
                            <a>
                                <span className="absolute inset-0" />
                                {props.dislike}
                            </a>
                        </p>
                    </div>
                </div>

                <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <a>
                                <span className="absolute inset-0" />
                                {props.author}
                            </a>
                        </p>
                    </div>
                </div>
            </article>
        </Fragment>
    )
}
