export default function App() {

    //PROMISE
    const data1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('something went wrong')
        }, 5000);
    })

    data1.then((val) => {
        console.log(val); //when resolved
    }).catch((err) => {
        console.log(err) //when reject
    })


    //SET INTERVAL
    console.log('me first')
    const m = setInterval(() => { //5 5 sec ko interval ma dekhaucha
        reject('something went wrong')
    }, 5000);
    setTimeout(() => {
        clearInterval(m);
    }, 6000);
    console.log("sello");


    //AXIOS
    const data = axios.get('https://jsonplaceholder.typicode.com/posts')

    data.then((val) => {
        console.log(val.data); //when resolved
    }).catch((err) => {
        console.log(err) //when rejected
    })

    console.log('me first')


    //DATA fetching

    const [cat, setCat] = useState([]); //initial state, rerender=> app comp feri chalnu ho
    const [recipe, setRecipe] = useState([]);

    const getCat = async () => {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            // console.log(response.data)
            setCat(response.data.categories);
            console.log(cat);
        } catch (error) {
            console.log(error);
        }
    }


    const getRecipe = async () => {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
            // console.log(response.data)
            setRecipe(response.data.meals);
            console.log(recipe);
        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => { //dom mount bhayesi matra chalcha
        getCat();
        getRecipe();
    }, [])
    // console.log(cat);

    return (
        <div className="grid grid-cols-[repeat(autofit,minmax(300px,1fr))] gap-6">
            {cat?.map((c) => {
                return <Card className="w-100 py-6 px-3" key={c.idCategory}>
                    <h1>{c.strCategory}</h1>
                    <img src={c.strCategoryThumb} className='w-fit' alt="" />
                    <p className="line-clamp-3">{c.strCategoryDescription}</p>
                </Card>
            })}

            {recipe?.map((r) => {
                return <Card key={r.idMeal} className="w-fit" onPress={() => console.log("item pressed")}>
                    <CardBody className="">
                        <Image
                            alt={r.strMeal}
                            className="w-60 object-cover h-[140px] justify-self-center"
                            radius="lg"
                            shadow="sm"
                            src={r.strMealThumb}
                        />
                    </CardBody>
                    <div>
                        <ul className="list-disc pl-6 space-y-2">
                            {r.strInstructions.split(/\r?\n/).filter((step) => step.trim() !== "").map((step, index) => {
                                return <li key={index}>
                                    {step}
                                </li>
                            })}
                        </ul>
                    </div>

                    <CardFooter className="text-small justify-between">
                        <b>{r.strMeal}</b>
                        <p className="text-default-500">{r.strCategory}</p>
                    </CardFooter>
                </Card>
            })}
        </div>
    )

}