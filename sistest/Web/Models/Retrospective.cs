namespace Web.Models
{
    using System;
    using System.Collections.Generic;

    /// <summary>
    /// Represents a retrospective as passed to the client
    /// </summary>
    public class Retrospective
    {
        /// <summary>
        /// Gets or sets the name of the retrospective
        /// </summary>
        public string Name
        {
            get;
            set;
        }

        /// <summary>
        /// Gets or sets a summary of the retrospective
        /// </summary>
        public string Summary
        {
            get;
            set;
        }

        /// <summary>
        /// Gets or sets the date of the retrospective
        /// </summary>
        public DateTime Date
        {
            get;
            set;
        }

        /// <summary>
        /// Gets or sets a list of participant names
        /// </summary>
        public IEnumerable<string> Participants
        {
            get;
            set;
        }

        /// <summary>
        /// Gets or sets the feedback items on the retrospective
        /// </summary>
        public IEnumerable<FeedbackItem> FeedbackItems
        {
            get;
            set;
        } 
    }
}