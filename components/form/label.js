import clsx from 'clsx'

export default function Label(props) {
  return (
    <label
      {...props}
      className={clsx([
        'absolute px-2 text-xs bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all -top-2 left-2 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500  peer-focus:-top-2 peer-focus:left-2 peer-placeholder-shown:text-sm peer-focus:bg-white dark:peer-focus:bg-gray-800 peer-focus:px-2 peer-focus:text-xs peer-focus:text-gray-600 dark:peer-focus:text-gray-300',
        props.error && 'peer-placeholder-shown:text-red-500 select-none',
      ])}
    >
      {props.children}
    </label>
  )
}
