namespace Services.Models
{
    using System;
    using System.Collections.Generic;
    using Common.Models;

    public class Retrospective : IRetrospective
    {
        /// <summary>
        /// Gets or sets the retrospective name
        /// </summary>
        public string Name
        {
            get;
            set;
        }

        /// <summary>
        /// Gets or sets the summmary of the retrospective
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
        /// Gets or sets the participants of the retrospective
        /// </summary>
        public IEnumerable<IParticipant> Participants
        {
            get;
            set;
        }

        /// <summary>
        /// Gets or sets the feedback items associated with the retrospective
        /// </summary>
        public IEnumerable<IFeedbackItem> FeedbackItems
        {
            get;
            set;
        }
    }
}
