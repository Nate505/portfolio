import './globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}){
    return(
        <html lang="en">
            <body className='bg-[#0E1219] p-0 m-0 min-h-[100vh]'>{children}</body>
        </html>
    )
}