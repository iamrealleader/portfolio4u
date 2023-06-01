import Image from "next/image"

const Loading = () => {
  return (
    <div className="blurbg loadingCenter">
      <Image priority src='/images/loading.gif' width={50} height={50} alt="Loading..."></Image>
    </div>
  )
}

export default Loading
