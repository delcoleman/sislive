namespace Web.Models
{
    /// <summary>
    /// Represents a feedback item to send to the client
    /// </summary>
    public class FeedbackItem
    {
        /// <summary>
        /// The name of the person who raised the feedback
        /// </summary>
        public string RaisedBy
        {
            get;
            set;
        }

        /// <summary>
        /// The text of the feedback
        /// </summary>
        public string Body
        {
            get;
            set;
        }

        /// <summary>
        /// The type of feedback
        /// </summary>
        public string FeedbackType
        {
            get;
            set;
        }
    }
}