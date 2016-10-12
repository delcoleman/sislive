namespace Services.Models
{
    using Common.Models;

    public class FeedbackItem : IFeedbackItem
    {
        /// <summary>
        /// Gets or sets the provider of the feedback
        /// </summary>
        public IParticipant Provider
        {
            get;
            set;
        }

        /// <summary>
        /// Gets or sets the body content of the feedback
        /// </summary>
        public string Body
        {
            get;
            set;
        }

        /// <summary>
        /// Gets or sets the type of feedback
        /// </summary>
        public FeedbackTypes FeedbackType
        {
            get;
            set;
        }
    }
}
