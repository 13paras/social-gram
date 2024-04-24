import { Toaster } from 'react-hot-toast'

const ReactToaster = () => {
  return (
    <Toaster
    position='top-center'
    reverseOrder={false}
    gutter={8}
    containerClassName=''
    containerStyle={{}}
    toastOptions={{
      // Define default options
      className: "",
      duration: 5000,
      style: {
        background: "#333",
        // 363636
        color: "#fff",
        marginTop: "50px",
        borderRadius: "10px"
      },
      // Default options for specific types
      success: {
        duration: 3000,
        // Custom toast icon style
        iconTheme: {
          primary: "green",
          secondary: "#333",
        },
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      },
    }}
  />
  )
}

export default ReactToaster