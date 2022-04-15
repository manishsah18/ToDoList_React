import React from 'react'

export const About = () => {
    let style = {
        margin: "20px",
        padding: "10px",
        color: "blue",
        // background: "pink",
        // margin: "auto"   
    }
    let style1 = {
        color: "black"
    }

    return (
        <div className=' card' style={style}>
            <h3 style={style1} >What is a To-Do List?</h3><hr />It’s a list of tasks you need to complete or things that you want to do.

            Most typically, they’re organised in order of priority. Traditionally, they’re written on a piece of paper or post it notes and act as a memory aid. As technology has evolved we have been able to create a todo lists with excel spreadsheets, word documents, email lists, todo list apps, Microsoft to do and google to do list to name a few. You can use a to do list in your home and personal life, or in the workplace.

            Having a list of everything you need to do written down in one place means you shouldn’t forget anything important. By prioritising the tasks in the list you plan the order in which you’re going to do them and can quickly see what needs your immediate attention and what tasks you can leave until a little later.
            <hr />
            <h3 style={style1}>The Benefits of Using a To-Do List :- </h3>< hr />
            One of the most important reasons you should use a to do list is that it will help you stay organised. When you write all your tasks in a list, they seem more manageable. When you’ve got a clear outline of the tasks you’ve got to do and those you’ve completed, it helps you stay focused. While freeing up space in your mind for other more creative tasks.

            When you complete a task, you can cross it off your list. This gives you a sense of progress and achievement, something you’ll lack if you’re always rushing from one task to the next. If you feel a sense of achievement, it spurs you on and motivates you to keep moving forward.
            <hr />
            <h3 style={style1}>Why To-Do list is important?  </h3>< hr />
            One of the most significant benefits of why to do list is important that it will help you stay organized. It will also help those tasks appear more manageable.

You’ll be able to stay more focused because you’ve got an outline of what you’ve got to do and things you’ve already completed. Having tasks written in a list frees up space in your mind and allows you to be more creative.
            <hr />
            <h3 style={style1}>Make a To-Do List Tricks and Methods :- </h3>< hr />
            How do you make a to-do list that works? One reason why to-do lists don't work is that most people don't know how to craft them correctly. You could end up with a list that's too long, too short, too convoluted or too confusing, among other things. Then, the to-do list becomes a hindrance to your efficiency rather than a useful tool. So, how do you make a to-do list worth following? What prioritisation techniques and methods can you help you make your to-do list more productive.
            <br /><br />
        </div>
    )
}
