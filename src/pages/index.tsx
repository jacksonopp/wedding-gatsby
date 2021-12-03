import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => (
  <>
    <Layout pageTitle="Home">
      <main className="min-h-screen">
        <section id="img" className="static">
          <StaticImage
            src="https://picsum.photos/800"
            alt="jackson and johanna"
            layout="fullWidth"
            aspectRatio={21 / 9}
            placeholder="blurred"
          />
          <p className="absolute top-56 right-48 text-5xl">
            we're getting married!
          </p>
        </section>
        <section id="names" className="flex justify-center gap-5 py-28">
          <p className="text-4xl">Jackson Oppenheim</p>
          <p className="text-4xl">&</p>
          <p className="text-4xl">Johanna Rubby</p>
        </section>
        <section id="info" className="bg-wedding-red flex justify-center py-8">
          <div className="flex flex-col items-center w-11/12 gap-7">
            <p className="text-4xl">date</p>
            <p className="text-2xl">location</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              autem, ducimus repellat nisi, maiores quasi quae animi magni ipsa
              a adipisci explicabo corrupti! Reiciendis eligendi neque voluptas
              excepturi quidem tempore.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  </>
)

export default IndexPage
