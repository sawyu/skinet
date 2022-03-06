
using System.Linq.Expressions;

namespace Core.Specifications
{
    public class Specification : ISpecification<Task>
    {
        public Expression<Func<Task, bool>> Criteria => throw new NotImplementedException();

        public List<Expression<Func<Task, object>>> Includes => throw new NotImplementedException();

        public Expression<Func<Task, object>> OrderBy => throw new NotImplementedException();

        public Expression<Func<Task, object>> OrderByDescending => throw new NotImplementedException();

        public int Take => throw new NotImplementedException();

        public int Skip => throw new NotImplementedException();

        public bool IsPagingEnabled => throw new NotImplementedException();
    }
}