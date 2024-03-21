function Button({children, disabled, handleClick}) {
  return (
    <button
    onClick={handleClick}
    disabled={disabled}
    className="bg-neutral-500
     py-2 px-2 tracking-wide
      rounded-lg uppercase inline-block text-stone-200
       text-xs hover:bg-neutral-600
        transition-all duration-300 "
    >
        {children}
    </button>
  )
}

export default Button