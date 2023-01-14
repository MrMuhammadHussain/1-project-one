import React from 'react'

const Contect = () => {
  return (
    <div  className='contect'>
<main>
    <h1>Contect Us</h1>

    <form>
<div>
    <label>Name</label>
    <input type="text"  required placeholder='Abc' />
</div>

<div>
    <label>Email</label>
    <input type="Email"  required placeholder='abc@xyz' />
</div>

<div>
    <label>Massage</label>
    <input type="text"  required placeholder='Tell us Your Isuues...' />
</div>
<button type="submit">Submit Now</button>

    </form>
</main>



    </div>
  )
}

export default Contect