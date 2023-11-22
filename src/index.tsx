import { BACKGROUND_COLORS, TEXT_COLORS, SHAPE_COLORS } from "./helper/colors"
import Shape, { ShapeNames } from "./shape"
import { twMerge } from "tailwind-merge"
import { randomNumber } from "./helper/random"

type Variant = "name" | "shape"

interface TwAvatarProps {
	className?: string
	displayValue?: string
	// this should be unique to user, it can be email, user id, or full name
	value: string
	size?: number
	shadow?: boolean
	variant?: Variant
}

export default function TwAvatar({ className, variant = "name", displayValue, value, size = 32 }: TwAvatarProps) {
	// get first two letters
	const name = String(displayValue || value).substring(0, 2)

	// generate unique random for given value
	// there is 20 colors in array so generate between 0 and 19
	const key = randomNumber({ value, min: 0, max: 19 })
	// there is 60 shapes so generate between 1 and 60
	const shapeKey = randomNumber({ value, min: 1, max: 60 })

	return (
		<div
			className={twMerge(
				"flex justify-center items-center select-none shadow-md border-2 border-slate-50 rounded-full hover:z-10",
				className,
			)}
			style={{
				width: `${size}px`,
				height: `${size}px`,
				backgroundColor: `#${BACKGROUND_COLORS[key]}`,
			}}
		>
			{variant === "name" ? (
				<p
					className={twMerge("text-center box-border leading-[0] m-0 p-0 uppercase font-medium")}
					style={{
						color: `#${TEXT_COLORS[key]}`,
						fontSize: Math.round((size / 100) * 37),
					}}
				>
					{name}
				</p>
			) : (
				<Shape
					name={`Shape${shapeKey}` as ShapeNames}
					color={SHAPE_COLORS[key]}
					size={Math.round((size / 100) * 50)}
				/>
			)}
		</div>
	)
}
