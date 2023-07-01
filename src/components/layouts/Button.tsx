

type Props = {
    text:string
}

export default function Button({text}: Props) {
  return (
    <>
      <button className='btn btn-ghost normal-case bg-gray-700 text-white p-6 m-1 py-2 rounded-md '>
        {text}
      </button></>



  )
}