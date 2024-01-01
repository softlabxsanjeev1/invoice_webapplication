export default function Notes({ notes }) {
    return (
        <>
            <section className='mt-10 mb-5'>
                {/* text area */}
                <p className="lg:w-1/2 text-justify">{notes}</p>
            </section>
        </>
    )
}
