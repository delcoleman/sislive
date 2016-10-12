namespace Services
{
    using System;
    using System.Collections.Generic;
    using Common.Models;
    using Common.Services;
    using Models;

    public class RetrospectiveService : IRetrospectiveService
    {
        public IRetrospective CreateRetrospective()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<IRetrospective> GetRetrospectives()
        {
            return new Retrospective[]
            {
                new Retrospective
                {
                    Name = "A test retrospective",
                    Date = DateTime.Now,
                    Summary = "This one weny really well",
                    FeedbackItems = new FeedbackItem[]
                    {
                        new FeedbackItem
                        {
                            Body = "A classic feedbackitem",
                            FeedbackType = FeedbackTypes.Positive
                        }
                    },
                    Participants = new Participant[]
                    {
                        new Participant
                        {
                            Name = "John Smith"
                        }
                    }
                },
                new Retrospective
                {
                    Name = "A test retrospective",
                    Date = DateTime.Now,
                    Summary = "This one weny really well",
                    FeedbackItems = new FeedbackItem[]
                    {
                        new FeedbackItem
                        {
                            Body = "A classic feedbackitem",
                            FeedbackType = FeedbackTypes.Positive
                        }
                    },
                    Participants = new Participant[]
                    {
                        new Participant
                        {
                            Name = "John Smith"
                        }
                    }
                }
            };
        }
    }
}
