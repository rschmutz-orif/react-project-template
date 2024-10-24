import React from 'react'

const PostItsListEmpty = () => {
    return (<>
        <section className="flex justify-center pt-4 sm:pt-12">
            <div className="px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-base font-semibold leading-7 text-primary">Vous n'avez encore rien ajouté</p>
                    <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Aucun Post-It</h2>
                    <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                        Vous pouvez ajouter un nouveau Post-It <br />en cliqueant sur le bouton avec le "+".
                    </p>
                </div>
            </div>
        </section>
    </>)
}

export default PostItsListEmpty