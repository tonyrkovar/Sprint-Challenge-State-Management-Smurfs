1. What problem does the context API help solve?

    Context API helps you manage props in a more centralized way allowing users to avoid prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does 
each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Store: The store is known as a 'single source of truth' because it is what houses your state and allows you to avoid prop drilling by offering a centeralized place to access and pass state. 

    actions: Actions are powerful and useful tools that allow you to dispact state management calls across your components and allow you to incoroporate your reducer switches so that way you can keep an eye on your state more closesly.

    reducers: Run in a cascading switch so that you can have more control over your state and allow you to ensure that the component you pass it to only has the information that is completely required of it. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is a centeralize _store_ that allows your app to access state more easily by passing it directly to the component that naeeds to acces it vs Component state that requires you to pass the localized state as props via prop drilling which gets messy quickly having to keep track of props 4+ components down. 




1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux thunk is a middleware that helps us manage async application state by passing our action creators into the middle ware and dispatching multiple actions in line. The case we've used in class for API calls has been super helpful by allowing us to set "isFetching" and and managing our api in an async matter to ensure that our code does not break. (Specifically my biggest problem, .map being undefined :( )




1. What is your favorite state management system you've learned and this sprint? Please explain why!

    Redux! Context API didn't really stick with me at all but once we got into redux and I started working on the project it just seemed so straight forward to me. Creating a single place to house your state and then manipulating it with reducers and calling those with actions just makes sense. It kind of feels like the epitome of reusability. Especially once you start looking into the hooks. 