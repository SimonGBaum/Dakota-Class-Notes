import './HomePage.css'

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="home-content">
        <h2 className="home-title">Welcome to <span className="neon-text-red">TaskMaster</span></h2>
        <p>
          In Night City, staying on top of your missions is the difference between surviving and thriving.
          TaskMaster is your personal edge — a tool built for the fast-moving, never-stopping life of a
          street operative. Track your objectives, mark your victories, and never let a job slip through
          the cracks again.
        </p>
        <p>
          Whether you're juggling corpo contracts, side gigs, or personal goals, TaskMaster gives you
          a clean, no-BS interface to organize what matters. Create tasks in seconds, mark them complete
          with a click, and watch your daily streak climb as you power through the list.
        </p>
        <p>
          Stay sharp. Stay organized. The city never sleeps — and neither does your task list.
          Use the navigation above to view all your tasks, track pending work, or review what
          you've already conquered today.
        </p>
      </section>
    </div>
  )
}
