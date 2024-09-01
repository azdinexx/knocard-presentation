import React from 'react'

function NavBar() {
    return (
        <div className='fixed bottom-0 left-0 w-full bg-red-500 p-10 flex justify-between'>
            <button>
                home
            </button>
            <button>
                share
            </button>
            <button>
                map
            </button>
        </div>
    )
}

export default NavBar