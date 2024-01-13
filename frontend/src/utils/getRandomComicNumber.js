export const getRandomComicNumber = () => {
    // 2880 is the current amount of comics. XKCD May have some sort of API that allows you to fetch the total number of comics made but I did not find anything related to that.
    const randomNum = Math.floor(Math.random() * 2880) + 1
    return randomNum
}