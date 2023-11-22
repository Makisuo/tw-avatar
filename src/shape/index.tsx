import { ComponentType } from "react"
import * as shapes from "./shapes"
import { ShapeProps } from "./shapes"

import { twMerge } from "tailwind-merge"

export type ShapeNames = keyof typeof shapes
interface ShapeList {
	[key: string]: ComponentType<ShapeProps>
}

export interface ShapeWrapperProps {
	className?: string
	name: ShapeNames
	size?: number
	color: string
}

export const shapeList = Object.keys(shapes)

export default function Shape({ className, name, size = 24, color, ...rest }: ShapeWrapperProps) {
	const Tag = (shapes as ShapeList)[name]

	if (!Tag) {
		// shape doen't exists
		return null
	}

	return (
		<div
			className={twMerge("inline-flex items-center align-middle text-current", className)}
			style={{
				color: `#${color}`,
			}}
			{...rest}
			role="img"
		>
			<Tag width={size} />
		</div>
	)
}
