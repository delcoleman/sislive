namespace Common.Models
{
    /// <summary>
    /// Represents a feedback item of a retrospective
    /// </summary>
    public interface IFeedbackItem
    {
        /// <summary>
        /// Gets the provider of the feedback
        /// </summary>
        IParticipant Provider
        {
            get;
        }

        /// <summary>
        /// Gets the body content of the feedback
        /// </summary>
        string Body
        {
            get;
        }

        /// <summary>
        /// Gets the type of feedback
        /// </summary>
        FeedbackTypes FeedbackType
        {
            get;
        }
    }
}
