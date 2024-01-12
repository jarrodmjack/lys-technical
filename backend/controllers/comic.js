const prisma = require('../db')

const getComicById = async (req, res) => {
    try{
        await prisma.comic.upsert({
            where: {
                id: req.params.id
            },
            create: {
                id: req.params.id,
                timesVisited: 1
            },
            update: {
                timesVisited: {increment: 1}
            }
        })

        const response = await fetch(`https://xkcd.com/${req.params.id}/info.0.json`)
        const data = await response.json()
        res.status(200).json(data)
    } catch (e) {
        console.log(e)
        res.status(400).json({err: e}) // could be more specific here depending on how you want to handle errors such as not valid number, etc
    } 
}

const getLatestComic = async (req, res) => {
    try {
        const response = await fetch("https://xkcd.com/info.0.json")
        const data = await response.json()

        await prisma.comic.upsert({
            where: {
                id: String(data.num)
            },
            create: {
                id: String(data.num),
                timesVisited: 1
            },
            update: {
                timesVisited: {increment: 1}
            }
        })
        res.status(200).json(data)
    } catch (e) {
        console.log(e)
        res.status(400).json({err: e})
    }
}



module.exports = { getComicById, getLatestComic }